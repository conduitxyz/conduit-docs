export default function HaveAQuestion() {
  return (
    <div className="p-4 mt-6 flex gap-2 items-center rounded-[3px] bg-[#f1f1ef] dark:bg-[#252525] text-base dark:text-white/80 text-[#37352f] pl-3">
      <span aria-label="💡" className="-my-2 text-xl leading-none" role="img">
        💡
      </span>
      <div>
        Have a question that isn&apos;t answered here? Check out our{" "}
        <a
          className="opacity-70 underline"
          href="https://discord.com/invite/7nJMfT3UAa"
          rel="noopener"
          target="_blank"
        >
          Discord Support Server
        </a>
        .
      </div>
    </div>
  );
}
