import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { name, email, subject, message } = data

    // Here you would typically use a service like SendGrid, Nodemailer, or Resend
    // For demonstration, we'll just log the data and return a success response
    console.log("Contact form submission:", { name, email, subject, message })

    // In a real implementation, you would send an email here
    // Example with a hypothetical email service:
    /*
    await sendEmail({
      to: "pranshulgera0508@gmail.com",
      subject: `Contact Form: ${subject}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });
    */

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}

