import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uses",
  description: "various running lists",
};

const Uses = () => {
  return (
    <div>
      <h1 className="font-bold text-4xl mb-8 tracking-tighter">setups</h1>
      <section className="prose prose-neutral dark:prose-invert">
        <p>I'll use this as a catchall page of all sorts of lists.</p>
        <h3 id="work">Work</h3>
        <ul>
          <li>16" MacBook Pro (2023)</li>
        </ul>
        <h3 id="personal">Personal</h3>
        <ul>
          <li>14" MacBook Pro (2023)</li>
          <ul>
            <li>8GB Memory</li>
            <li>1TB storage</li>
          </ul>
          <li>PC Build</li>
          <ul>
            <li>AMD Ryzen 5 5600X</li>
            <li>NVIDIA RTX 3070 Ti FE Edition</li>
            <li>32GB RAM</li>
            <li>5.5TB Storage</li>
          </ul>
          <li>Herman Miller Embody</li>
          <li>Fully/Herman Miller Jarvis Standing Desk</li>
          <li>Logitech MX Master 3</li>
          <li>Keychron K6 Pro</li>
          <li>Sony WH-1000MX4</li>
          <li>LG 34" UltraWide QHD - 34WP65C-B</li>
          <li>Samsung 28" 4k UHD - U28R550</li>
        </ul>
        <h3 id="photo">Photo</h3>
        <ul>
          <li>Sony A7III</li>
          <ul>
            <li>Tamron 17 - 28 ƒ/2.8</li>
            <li>Tamron 28 - 75mm ƒ/2.8</li>
          </ul>
          <li>Fujifilm X-E4</li>
          <ul>
            <li>TTArtisan 27mm ƒ/2.8</li>
          </ul>
          <li>
            <s>Olympus Stylus Infinity</s> 🪦
          </li>
          <li>Yashica T4</li>
          <li>Kodak Ektar H35</li>
          <li>Ansco Pix Panorama</li>
          <li>Vivitar PS44s</li>
          <li>Canon Sureshot</li>
        </ul>
      </section>
    </div>
  );
};
export default Uses;
