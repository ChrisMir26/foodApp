const dev = {
    BACKEND_URL: "http://localhost:4000/api",
    STRIPE_PUBLISHABLE_KEY: "pk_test_51NyUjQEY4EDPSwPMPFLwBpU8cz85wCaartuVmUP9fRSKbeTV4xa9YlQQQz4iZz5cnLI9zx62iuh8jrIBqOAlbdI300DJLwgtDV",
    STRIPE_URL: "http://localhost:4000"
};

const prod = {
    // Aquí reemplaza con los valores de producción
    BACKEND_URL: "",
    STRIPE_PUBLISHABLE_KEY: "",
    STRIPE_URL: ""
};

const config = process.env.NODE_ENV === 'development' ? dev : prod;

export default config;
