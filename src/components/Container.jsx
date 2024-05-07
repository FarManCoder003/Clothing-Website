const Container = ({children}) => {
  return (
    <div className={`container mx-auto lg:px-0 px-4`}>
        {children}
    </div>
  )
}

export default Container