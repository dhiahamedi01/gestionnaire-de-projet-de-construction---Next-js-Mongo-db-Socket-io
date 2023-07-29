var domain;

if (process.env.NODE_ENV === 'production') {
    console.log('env.....',process.env)
    domain= 'http://localhost:3000/api'
} else {
    domain= 'http://localhost:3000/api'
}

export default domain