import withMT from '@material-tailwind/react/utils/withMT';

const twConfig = withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
});
export default twConfig;
