import Image from "next/image"
import { Movie } from "../typings"

interface Props {
  netflixOriginals: Movie[]
}

const Banner = ({ netflixOriginals }: Props) => (
  <div>
    <div>
      {/* <Image /> */}
    </div>
  </div>
)

export default Banner