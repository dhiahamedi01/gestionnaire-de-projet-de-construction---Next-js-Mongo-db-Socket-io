var domain;

if (process.env.NODE_ENV === 'production') {
    domain= 'http://localhost:3000/api'
} else {
    domain= 'http://localhost:3000/api'
}

export default domain