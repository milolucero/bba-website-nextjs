import styles from '@/styles/HeadingBBAStyle.module.css';

/**
 * Component that displays a styled heading with an adornment in one of its sides.
 * @param {string} className  Optional classes to style the heading.
 * @param {bool} inverted  Set to true to place the heading to the right.
 * @param {string} color  The CSS color of the adorning shape.
 * @param {int} lineWidth  The width in pixels of the adorning shape.
 * @param {ReactNode} children  Heading text or other content.
 * @returns  A heading with an adornment in one of its sides.
 */
export default function HeadingBBAStyle({
  className = 'text-2xl md:text-5xl sm:text-4xl xm:text-2xl font-black',
  inverted = false,
  color = 'var(--primary-color)',
  lineWidth = 30,
  children,
}) {
  return (
    <div
      className={`${inverted ? `${styles['invert']}` : ''} ${
        styles['wrapper']
      } ${className} flex`}
    >
      <h2 className={`${styles['text']}`} style={{ whiteSpace: 'nowrap' }}>
        {children}
      </h2>
      <div
        className={`${styles['shape-wrapper']} flex w-full items-center`}
        style={{ fontSize: `${lineWidth}px` }}
      >
        <div
          className={`${styles['circle']}`}
          style={{ backgroundColor: `${color}` }}
        ></div>
        <div
          className={`${styles['line']}`}
          style={{ backgroundColor: `${color}` }}
        ></div>
      </div>
    </div>
  );
}
