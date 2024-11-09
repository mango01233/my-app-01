interface HeaderProps{
  font: {
    className:string;
  };
}

export default function Header({font}: HeaderProps) {
    return (
      <>
      <div>
        <h1 className= {` ${font.className}sticky top-0 z-37 w-full bg-background backdrop-blur-3xl`} >MANZZARI</h1>
        <div className="m-auto flex h-16 w-[95%] items-centre"></div>
      </div>
      </>
    )
  }
  