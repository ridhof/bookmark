create table newsletter_users (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    email varchar(254) NOT NULL UNIQUE,
    otp varchar(6),
    is_verified boolean DEFAULT false,
    created_at timestamp DEFAULT current_timestamp,
    modified_at timestamp DEFAULT current_timestamp
);