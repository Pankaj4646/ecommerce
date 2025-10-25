export default function About() {
    return (
        <section className="max-w-6xl mx-auto px-6 py-16">
            {/* Heading */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    About <span className="text-red-600">Us</span>
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Welcome to <strong>[Your Store Name]</strong> — your one-stop shop for
                    quality products at the best prices.
                </p>
            </div>

            {/* Our Journey */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <img
                    src="/about-us.jpg"
                    alt="Our Story"
                    className="rounded-2xl shadow-lg"
                />
                <div>
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                        Our Journey
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Started in <strong>[Year]</strong>, our mission has been to bring
                        the best products right to your doorstep with just a few clicks.
                        From humble beginnings to serving thousands of happy customers, our
                        journey has always been guided by one core value:{" "}
                        <strong>putting customers first</strong>.
                    </p>
                </div>
            </div>

            {/* What We Offer */}
            <div className="mb-16">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
                    What We Offer
                </h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {[
                        "Wide range of fashion, electronics, home & lifestyle products",
                        "100% genuine & hand-picked items",
                        "Secure payment options & safe checkout",
                        "Fast & reliable delivery",
                        "Hassle-free returns",
                        "24/7 dedicated customer support",
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition"
                        >
                            <p className="text-gray-700">{item}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Our Promise */}
            <div className="text-center">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                    Our Promise
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    At <strong>[Your Store Name]</strong>, we aim to make shopping simple,
                    enjoyable, and trustworthy. Whether you’re shopping for yourself or
                    gifting loved ones, we promise a seamless experience every time.
                </p>
            </div>
        </section>
    );
}