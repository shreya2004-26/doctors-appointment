import EmailTemplate from '@/emails';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req, res) {
    try {
        //get data from frontend
        const { patientName, appointmentDate, appointmentTime, note, doctorName, image } = await req.json();
        const { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>', //it is always this email
            to: ['shreyasinghlnu2@gmail.com'],//this email must be your own / registered email
            subject: 'Booking Confirmation-DoctorsAppointment',
            react: EmailTemplate({ patientName, doctorName, appointmentDate, appointmentTime, note, image }),
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}
