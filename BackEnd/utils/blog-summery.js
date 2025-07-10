export const blogSum = async (text) => {
  try {
    const lines = text.split('\n').filter(line => line.trim() !== '');
    const summaryLines = lines.slice(0, Math.min(lines.length, 3)); // Take up to the first 5 non-empty lines
    const summary = summaryLines.join('\n');
    return summary;
  } catch (err) {
    throw { status: 500, msg: "Failed to summarize text.", error: err.message };
  }
};
