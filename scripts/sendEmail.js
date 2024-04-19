import { post } from 'axios';

const sendEmail = async (name, email, subjectMsg, bodyMsg) => {
    try {
        const response = await post('CSLabs/send-email', {
            to: 'jaytoon.dev@gmail.com',
            subject: $(subjectMsg),
            body: `Name: ${name}\nEmail: ${email}\nMessage: ${bodyMsg}`,
        });

        console.log('Email sent successfully!');
        console.log(response.data);
    } catch (error) {
        console.error('Failed to send email:', error.message);
    }
};