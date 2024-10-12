

function Footer() {
    const date:number = new Date().getFullYear()
  return (
    <footer>
        <div>
            <p>All right reserved &copy;{date}</p>
        </div>
    </footer>
  )
}

export default Footer