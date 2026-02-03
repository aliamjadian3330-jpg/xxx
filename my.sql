CREATE TABLE requests (
  id INT AUTO_INCREMENT PRIMARY KEY,
  service_type VARCHAR(50),
  name VARCHAR(100),
  phone VARCHAR(20),
  plate VARCHAR(20),
  latitude VARCHAR(50),
  longitude VARCHAR(50),
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
