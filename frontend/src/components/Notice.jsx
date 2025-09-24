export default function Notice({ message }) {
  if (!message) return null;
  return (
    <div className="rounded-md border border-blue-200 bg-blue-50 px-4 py-3 text-blue-900 dark:border-blue-400/30 dark:bg-blue-950/40 dark:text-blue-100">
      {message}
    </div>
  );
}


