document.addEventListener("DOMContentLoaded", () => {
  const uploadForm = document.getElementById("uploadForm");
  const contentInput = document.getElementById("content");
  const typeSelect = document.getElementById("type");
  const generatedLink = document.getElementById("generatedLink");

  uploadForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const type = typeSelect.value;
    const content = contentInput.value;
    const accessId = Math.random().toString(36).substr(2, 8);

    try {
      const res = await fetch("https://sumonsecureview.vercel.app/api/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, content, accessId }),
      });

      if (res.ok) {
        generatedLink.classList.remove("hidden");
        generatedLink.innerHTML = `${window.location.origin}/view/${accessId}`;
      } else {
        alert("❌ Upload failed!");
      }
    } catch (err) {
      console.error(err);
      alert("❌ Server error!");
    }
  });
});
