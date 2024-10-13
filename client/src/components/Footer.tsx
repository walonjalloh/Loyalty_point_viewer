

function Footer() {
    const date:number = new Date().getFullYear()
  return (
    <footer>
        <div className="flex items-center justify-center">
            <p className="font-bold text-[20px]">All right reserved &copy;{date}</p>
        </div>
    </footer>
  )
}

export default Footer