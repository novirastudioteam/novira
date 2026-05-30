import "jsr:@supabase/functions-js/edge-runtime.d.ts";

interface BookingRequest {
  name: string;
  email: string;
  instagram: string;
  business: string;
  message?: string;
}

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      {
        status: 405,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }

  try {
    const bookingData: BookingRequest = await req.json();

    // Validate required fields
    if (!bookingData.name || !bookingData.email || !bookingData.instagram || !bookingData.business) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    // Send email using Resend API
    const resendApiKey = Deno.env.get("RESEND_API_KEY") || "re_Z4kMdaCB_2UdS7qKpgb7kbrr1LLB1szWG";

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Novira Studio <onboarding@resend.dev>",
        to: ["novirastudio.team@gmail.com"],
        subject: `Nuova richiesta consulenza da ${bookingData.name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #9B5DE5; font-size: 24px;">Nuova richiesta di consulenza gratuita!</h1>

            <div style="background-color: #f4f4f4; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h2 style="color: #333; font-size: 18px; margin-bottom: 15px;">Dati del contatto:</h2>
              <ul style="list-style: none; padding: 0;">
                <li style="margin: 10px 0;"><strong>Nome:</strong> ${bookingData.name}</li>
                <li style="margin: 10px 0;"><strong>Email:</strong> ${bookingData.email}</li>
                <li style="margin: 10px 0;"><strong>Instagram:</strong> ${bookingData.instagram}</li>
                <li style="margin: 10px 0;"><strong>Tipo di attività:</strong> ${bookingData.business}</li>
              </ul>
            </div>

            <div style="background-color: #fff; padding: 20px; border-left: 4px solid #9B5DE5; margin: 20px 0;">
              <h3 style="color: #333; font-size: 16px; margin-bottom: 10px;">Messaggio:</h3>
              <p style="color: #666; margin: 0;">${bookingData.message || "Nessun messaggio aggiuntivo"}</p>
            </div>

            <p style="color: #999; font-size: 14px; margin-top: 30px;">
              Inviato dal form di prenotazione consulenza su novira.studio
            </p>
          </div>
        `,
      }),
    });

    if (!emailResponse.ok) {
      const errorData = await emailResponse.text();
      console.error("Resend API error:", errorData);
    } else {
      console.log("Email sent successfully to novirastudio.team@gmail.com");
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Richiesta inviata con successo!",
        data: {
          name: bookingData.name,
          email: bookingData.email,
          business: bookingData.business
        }
      }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error processing booking:", error);

    return new Response(
      JSON.stringify({
        error: "Errore durante l'invio della richiesta. Riprova."
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});
