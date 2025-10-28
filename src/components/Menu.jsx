import MenuItem from "./MenuItem"

const Menu = ({items}) => {
  return (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item)=>(
            <MenuItem key={item} {...item}/>
        ))}
    </div>
  )
}

export default Menu