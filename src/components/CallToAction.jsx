

const CallToAction = ({ styles='' }) => {
    return (
      <a href="#"
        className={`capitalize px-2 py-1 rounded text-sky-500 border-2 border-sky-500 hover:shadow-lg hover:shadow-sky-500 hover:bg-sky-500 hover:text-slate-100 trans ${styles}`}>
        make appointment
      </a>
    )
}

export default CallToAction;