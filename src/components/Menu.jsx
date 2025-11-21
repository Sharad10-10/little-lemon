import React from 'react'

const Menu = () => {

    const menuList = [
        {
            img : 'src/assets/greek salad.jpg',
            price : '10.99',
            title : 'Greek salad',
            description : 'Lorem ipsum dolor sit amet, illum vituperata id mea, eius phaedrum eu duo. Te maiorum gloriatur sea.'

        }, 

        {
            img : 'src/assets/bruchetta.svg',
            price : '8.99',
            title : 'Bruchetta',
            description : 'Lorem ipsum dolor sit amet, illum vituperata id mea, eius phaedrum eu duo. Te maiorum gloriatur sea.'

        },
        
        {

            img : 'src/assets/lemon dessert.jpg',
            price : '11.99',
            title : 'Lemon Dessert',
            description : 'Lorem ipsum dolor sit amet, illum vituperata id mea, eius phaedrum eu duo. Te maiorum gloriatur sea.'

        }

    ]


  return (
    <div className='mt-48' id='menu'>

        <div className='flex justify-around items-center'>
            <h1 className='text-3xl'>This Week's Specials</h1>
            <button className='bg-[rgb(244,206,19)] text-[18px] px-8 h-14 rounded-2xl cursor-pointer'>Online Menu</button>
        </div>

        <div className='flex justify-center gap-8 items-center mt-4 cursor-pointer'>
            {menuList.map((menuList, index)=> {
                return (

                    <div key={index} className='max-w-72 h-104 ] bg-[rgb(225,225,225)] rounded-2xl overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-y-105'>
                        <img src={menuList.img} alt= {menuList.title} className='w-full h-64 object-cover' />

                        <div className='flex justify-between mt-4 items-center px-2'>
                            <h2 className='text-xl'>{menuList.title}</h2>
                            <p className='text-orange-700 font-medium text-xl'>${menuList.price}</p>
                        </div>

                        <div>
                            <p className='mt-4 pb-4 px-2 text-[18px]'>{menuList.description}</p>
                        </div>

                    </div>


                )

            })}
        </div>

    </div>
  )
}

export default Menu