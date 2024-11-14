import emailjs from 'emailjs-com';

const sendRegistrationEmail = async (course, user) => {
    const { name, surname, email } = user;
    const { level, language, location, startDate, endDate } = course;

    try {
        const result = await emailjs.send(
            'service_x4uz1zi', // Replace with your EmailJS Service ID
            'template_hkh5xhw', // Replace with your EmailJS Template ID
            {
                name,
                surname,
                level,
                language,
                location,
                startdate: startDate,
                enddate: endDate,
                user_email: email,
                to_email:email // recipient's email
            },
            'uj3Vv-VMRwkbTlfTa' // Replace with your EmailJS User ID
        );

        console.log('Email sent:', result.status, result.text);
        return result.status;
    } catch (error) {
        console.error('Failed to send email:', error);
        return null;
    }
};

export default sendRegistrationEmail;
