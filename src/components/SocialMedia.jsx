// a component to display a list of social media links
// it has to be a list of icons with links to the social media
// and contain linkedin, instagram, sitly
import { motion } from 'framer-motion';
import linkedin from '../assets/linkedin.svg';
import instagram from '../assets/instagram.svg';
import sitly from '../assets/letter-s.svg';
import Svg from './Svg';

// media object has the link, icon (svg) and key
const media = [
  {
    key: 1,
    link: 'https://www.sitly.com.ar/ninera/rosario/trsqgv',
    icon: sitly,
  },
  {
    key: 2,
    link: 'https://www.linkedin.com/in/celestetessone/',
    icon: linkedin,
  },
  {
    key: 3,
    link: 'https://www.instagram.com/celestetessone/',
    icon: instagram,
  }
];

const SocialMedia = () => {
  return (
    <div className="flex justify-center mt-10">
      <ul className="flex justify-center">
        {media.map((item) => (
          <motion.li
            key={item.key}
            className="mx-2"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <a href={item.link} target="_blank" rel="noreferrer">
              <Svg svgFile={item.icon} />
            </a>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}

export default SocialMedia
