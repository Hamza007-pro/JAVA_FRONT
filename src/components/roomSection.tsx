import Button from "../common/button"

const posts = [
    {
        id: 1,
        title: 'Exclusive Apartment in Miami',
        href: '#',
        description:
            'Entire apartment, 2 Bedrooms, 2 Large King Bed, 4 Guests.',
        imageUrl:
            require('../assets/images/room.jpg'),
        category: { title: 'Miami Beach', stars: 5 },
        price: 90
    },
    {
        id: 1,
        title: 'Exclusive Apartment in Miami',
        href: '#',
        description:
            'Entire apartment, 2 Bedrooms, 2 Large King Bed, 4 Guests.',
        imageUrl:
            require('../assets/images/img2.jpg'),
        category: { title: 'Miami Beach', stars: 5 },
        price: 100
    },
    {
        id: 1,
        title: 'Exclusive Apartment in Miami',
        href: '#',
        description:
            'Entire apartment, 2 Bedrooms, 2 Large King Bed, 4 Guests.',
        imageUrl:
            require('../assets/images/img4.jpg'),
        category: { title: 'Miami Beach', stars: 5 },
        price: 50
    },
    // More posts...
]

export default function RoomSection() {
    return (
        <div className="bg-white py-24 sm:py-32 ">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Book in a wide range of exclusive apartments. </h2>
                    <div className="px-1 py-1 bg-gold w-36 justify-center mx-auto mt-10"></div>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <article key={post.id} className=" rounded-lg flex flex-col items-start justify-between shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
                            <div className="relative w-full">
                            <div className="absolute  rounded-xl ring-1 ring-inset ring-gray-900/10  right-2  top-2 bg-white w-fit px-5 py-3 font-medium text-ivory" >
                                    From <span className="font-bold">${post.price}</span>/ night
                                </div>
                                <img
                                    src={post.imageUrl}
                                    alt=""
                                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                                />
                                <div className="absolute  rounded-2xl ring-1 ring-inset ring-gray-900/10  right-1/2  top-56 bg-white w-fit px-5 py-3" >
                                    {post.category.title}
                                </div>
                            </div>

                            <div className="max-w-xl text-center py-12 ">
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                        <a href={post.href}>
                                            <span className="absolute inset-0" />
                                            {post.title}
                                        </a>

                                    </h3>
                                    <p className="mt-5 line-clamp-3 text-md px-10 text-center  leading-6 text-gray-600 mb-10">{post.description}</p>
                                    <Button text={'Check Details'} />
                                </div>
                            </div>
                        </article>
                    ))}

                </div>
                <div className="justify-center items-center w-full flex">
                    <a
                        href="w"
                        className="rounded-md w-60 text-center bg-ivory mt-7 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        View All
                    </a>
                </div>
            </div>

        </div>
    )
}
