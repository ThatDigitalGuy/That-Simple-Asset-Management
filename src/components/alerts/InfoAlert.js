"use client"

export default function InfoPage({ content, link }) {
  return (
    <div className="alert alert-primary" role="alert">
      { content }
    </div>
  );
}
