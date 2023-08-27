import Card from "../components/Card";
import Facebook from "../components/Facebook";



const facebook = () => {
  return (
    <>

      <div className="md:mt-[-33px]">
        <Facebook />
        <Card title="Download Free FaceBook Videos" color="bg-gradient-to-b from-blue-700 to-sky-400 bg-clip-text text-transparent"
        src="/facebook2.png" />
      </div>

    </>
  )
}

export default facebook;