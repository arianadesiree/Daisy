-- settings.sql
CREATE DATABASE daisy;
CREATE USER daisyuser WITH PASSWORD 'daisy';
GRANT ALL PRIVILEGES ON DATABASE daisy TO daisyuser;