import {
    Body,
    Button,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Section,
    Text,
} from "@react-email/components";
import * as React from "react";

const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

export const AppointmentConfirmationEmail = ({
    patientName = "Patient",
    doctorName = "Doctor",
    appointmentDate = "N/A",
    appointmentTime = "N/A",
    note = "",
    image = ""
}) => (
    <Html>
        <Head />
        <Body style={main}>
            <Container style={container}>
                <Container style={{ display: "flex", width: "100%", justifyContent: "center" }}>
                    <Img
                        src={image} // Add your clinic's logo URL here
                        alt="Clinic Logo"
                        style={{ width: "80px", height: "80px", borderRadius: "9999px", objectFit: "cover" }}
                    />
                </Container>
                <Text style={heading}>
                    Appointment Confirmation
                </Text>
                <Text style={paragraph}>Dear {patientName},</Text>
                <Text style={paragraph}>
                    Your appointment with {doctorName} is confirmed.
                </Text>
                <Section style={infoSection}>
                    <Text style={infoItem}><strong>Date:</strong> {appointmentDate}</Text>
                    <Text style={infoItem}><strong>Time:</strong> {appointmentTime}</Text>
                    {note && (
                        <Text style={infoItem}><strong>Note:</strong> {note}</Text>
                    )}
                </Section>
                <Section style={btnContainer}>
                    <Button style={button} href="#">
                        Add to Calendar
                    </Button>
                </Section>
                <Text style={paragraph}>
                    Please arrive 10 minutes before your scheduled appointment.
                </Text>
                <Hr style={hr} />
                <Text style={footer}>
                    If you have any questions or need to reschedule, please contact our office at (123) 456-7890.
                    <br />
                    Best regards,
                    <br />
                    The Clinic Team
                </Text>
            </Container>
        </Body>
    </Html>
);

export default AppointmentConfirmationEmail;

const main = {
    backgroundColor: "#ffffff",
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
    maxWidth: "600px",
};


const heading = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
};

const paragraph = {
    fontSize: "16px",
    lineHeight: "26px",
    marginBottom: "20px",
};

const infoSection = {
    backgroundColor: "#f4f4f4",
    padding: "15px",
    borderRadius: "5px",
    marginBottom: "20px",
};

const infoItem = {
    fontSize: "16px",
    lineHeight: "26px",
    marginBottom: "10px",
};

const btnContainer = {
    textAlign: "center",
    marginBottom: "20px",
};

const button = {
    backgroundColor: "#5F51E8",
    borderRadius: "3px",
    color: "#fff",
    fontSize: "16px",
    textDecoration: "none",
    textAlign: "center",
    display: "block",
    padding: "12px",
};

const hr = {
    borderColor: "#cccccc",
    margin: "20px 0",
};

const footer = {
    color: "#8898aa",
    fontSize: "12px",
    lineHeight: "18px",
    textAlign: "center",
};
