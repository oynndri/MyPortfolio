import fetch from 'node-fetch';

const data = {
    service_id: 'service_naj52zm',
    template_id: 'template_74mbpcw',
    user_id: 'CmXNIlqBPkj3-P2md',
    template_params: {
        from_name: 'Antigravity AI',
        from_email: 'test@example.com',
        message: 'This is a test message to verify EmailJS configuration.'
    }
};

fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json'
    }
})
.then(res => {
    if (res.ok) {
        console.log('Success! Email sent.');
    } else {
        return res.text().then(text => {
            console.log('Error:', res.status, text);
        });
    }
})
.catch(err => console.error('Fetch error:', err));
