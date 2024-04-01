const axios = require('axios');

const sendEmail = async (name, email, subjectMsg, bodyMsg) => {
    try {
        const response = await axios.post('CSLabs/send-email', {
            to: 'jaytoon.dev@gmail.com',
            subject: subjectMsg,
            body: 'Name: ' + name + '\nEmail: ' + email + '\nSubject: ' + subject + '\nMessage: ' + bodyMsg,
        });

        console.log('Email sent successfully!');
        console.log(response.data);
    } catch (error) {
        console.error('Failed to send email:', error.message);
    }
};