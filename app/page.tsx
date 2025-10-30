import Hello from './component/hello'

const Home = () => {
  console.log('What type of component am I?')

  return (
    <div className="text-xl">
      Home page is here
      <Hello />
    </div>
  )
}

export default Home
