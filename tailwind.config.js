/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      
    },

    fontFamily:{
      "Inter":"inter",
      "Axiforma":"Axiforma"
    },

    colors:{
      black:'#181818',
      gray:'#F8F8F8',
      purple:'#2C3FF8',
      purple_two:'#4743E2',
      charcoal:'#303030',
      gray_two:'#E4E4E4',
      gray_three:'#F5F5F5',
      gray_text:'#A8A8A8',
      brown:'#D18A00',
      green:'#00D19F',
      pink:'#00D19F',
      red:'#F06C6C',
      white:'#fff',
      gray_text_two:'#484848',
      gray_text_three:'#787878',
      gray_btn_bg:'#EAEAEA',
      status_gray:'#EDEDED'

    }
  },
  plugins: [],
}