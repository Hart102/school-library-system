export const TableLayout = ({ children }) => {
  return (
    <section  className='bg-white p-lg-4 p-2 my-5'>{children}</section>
  )
}


export const ResponsiveTable = ({ children }) => {
  return (
    <div className="table-responsive">
      {children}
    </div>
  )
}


export const Table = ({ children }) => {
  return (
    <table className="table table-hover">
      {children}
    </table>
  )
}