const axios = require('axios');

const generateVideo = async (req, res) => {
  const { useCase, data } = req.body;

  try {
    // Call the Google Gemini API to generate the video
    const response = await axios.post('https://api.gemini.google.com/v1/video/generate', {
      useCase,
      data,
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.GEMINI_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    // Assuming the response contains a video URL
    const videoUrl = response.data.videoUrl;

    res.status(200).json({ success: true, videoUrl });
  } catch (error) {
    console.error('Error generating video:', error);
    res.status(500).json({ success: false, message: 'Error generating video' });
  }
};

module.exports = { generateVideo };
