export const translateSummary = async (summary) => {
  try {
    const response = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
        summary
      )}&langpair=en|ur`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.responseStatus !== 200) {
      throw new Error(`Translation API error: ${data.responseDetails}`);
    }

    return data.responseData.translatedText;
  } catch (err) {
    console.error("Translation Error:", err);
    throw {
      status: 500,
      msg: "Failed to translate summary.",
      error: err.message,
    };
  }
};
