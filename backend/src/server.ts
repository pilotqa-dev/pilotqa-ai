import app from "./app";

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`🚀 PilotQA AI Backend started on Port ${PORT}`);
});