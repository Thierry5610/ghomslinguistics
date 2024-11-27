import emailjs from 'emailjs-com';

const sendRegistrationEmails = async (course, user) => {
    const { name, surname, email, phone } = user;
    const { level, language, location, startDate, endDate } = course;

    try {
        // Sending email to the user (first template)
        const userEmailResult = await emailjs.send(
            'service_kxrajqs', // Replace with your EmailJS Service ID
            'template_hkh5xhw', // Replace with the first EmailJS Template ID
            {
                name,
                surname,
                level,
                language,
                location,
                startdate: startDate,
                enddate: endDate,
                to_email:email,
                user_email: email, // recipient's email (user)
            },
            'uj3Vv-VMRwkbTlfTa' // Replace with your EmailJS User ID
        );

        console.log('User email sent:', userEmailResult.status, userEmailResult.text);

        // Sending email to GHOMSLINGUISTICS Team (second template)
        const teamEmailResult = await emailjs.send(
            'service_kxrajqs', // Replace with your EmailJS Service ID
            'template_4bvmyaa', // Replace with the second EmailJS Template ID
            {
                name,
                surname,
                level,
                language,
                location,
                telephone: phone,
                startdate: startDate,
                enddate: endDate,
                email: email, // sender's email
                to_email: 'contact@ghomslinguistics.com', // Replace with the team's email
            },
            'uj3Vv-VMRwkbTlfTa' // Replace with your EmailJS User ID
        );

        console.log('Team email sent:', teamEmailResult.status, teamEmailResult.text);

        return {
            userEmailStatus: userEmailResult.status,
            teamEmailStatus: teamEmailResult.status,
        };
    } catch (error) {
        console.error('Failed to send emails:', error);
        return null;
    }
};

export default sendRegistrationEmails;
