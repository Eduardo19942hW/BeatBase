body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background: linear-gradient(to bottom, #fff0f5, #ffe4e1);
  text-align: center;
  color: #444;
  animation: gradientShift 15s ease infinite;
}

.container {
  padding: 2em;
  animation: fadeIn 2s ease-in;
}

.intro h1 {
  font-size: 2.5em;
  color: #ff69b4;
  margin-bottom: 0.2em;
}

.intro p {
  font-size: 1.2em;
  margin-bottom: 1.5em;
}

.photo-section img {
  width: 200px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  margin-top: 1em;
}

.message {
  margin: 2em auto;
  max-width: 600px;
  font-size: 1.1em;
  background-color: rgba(255,255,255,0.6);
  border-radius: 12px;
  padding: 1.5em;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.final-message {
  font-size: 1.1em;
  margin: 2em;
  color: #ff1493;
  font-weight: bold;
}

.btn {
  display: inline-block;
  padding: 0.8em 1.5em;
  background-color: #ff69b4;
  color: white;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  margin-top: 1em;
  transition: all 0.3s ease;
}

.btn:hover {
  background-color: #ff1493;
  transform: scale(1.05);
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
}

.btn:active {
  transform: scale(0.97);
  box-shadow: none;
}

.btn:focus {
  outline: 2px solid #ff69b4;
}

.footer {
  position: fixed;
  bottom: 10px;
  right: 10px;
  font-size: 0.9em;
  color: #888;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1em;
  padding: 2em;
  margin-top: 2em;
}

.gallery .item {
  animation: floatUp 3s ease-in-out infinite alternate;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  animation: fadeItem 1s ease