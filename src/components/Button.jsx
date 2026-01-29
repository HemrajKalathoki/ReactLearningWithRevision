function Button({title, cstyle}) {
  return (
    <div>
      <button className={`mt-4 px-4 ${cstyle} text-white rounded-md py-2 hover:bg-blue-700 transition-colors duration-500 ease-in-out`}>
        {title}
      </button>
    </div>
  );
}

export default Button;
