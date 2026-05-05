import React, { useState } from 'react'

function Two_way_binding() {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [submittedData, setSubmittedData] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault(); // prevent page refresh

        setSubmittedData({
            email: email,
            phone: phone
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="john@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="1234567890"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />

                <button type="submit">Submit</button>
            </form>

            {submittedData && (
                <div>
                    <h3>Email: {submittedData.email}</h3>
                    <h3>Phone: {submittedData.phone}</h3>
                </div>
            )}
        </div>
    )
}

export default Two_way_binding;