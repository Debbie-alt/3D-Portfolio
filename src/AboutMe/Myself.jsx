const Myself = () => {
  const openModal = () => {
    makeorder.classList.add("prod");
  };

  return (
    <div className=" top-[0px]  ">
      <img
        src="https://img.icons8.com/bubbles/100/bolivian-girl.png" 
        alt="bolivian-girl"  
        className="w-[50px] md:w-14"
        role="button"
        onClick={openModal}
      />
      
      <label htmlFor="myResume" className="tracking-tighter text-sm">
        Myself
      </label>
    </div>
  );
};

export default Myself;
