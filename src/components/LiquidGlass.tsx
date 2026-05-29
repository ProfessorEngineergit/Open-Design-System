interface GlassFilterProps {
  /** unique id referenced by `backdrop-filter: url(#id)` */
  id: string;
  /** displacement strength in px (0 = no refraction) */
  scale: number;
  /** turbulence base frequency — lower = larger, smoother lensing */
  frequency?: number;
  /** blur applied to the displacement map before it bends the backdrop */
  blur?: number;
}

/**
 * Hidden SVG filter that bends whatever is painted behind an element.
 * feTurbulence builds a smooth noise field; feDisplacementMap pushes the
 * backdrop pixels along it, so the scene visibly refracts through the glass.
 */
export function GlassFilter({ id, scale, frequency = 0.013, blur = 0.7 }: GlassFilterProps) {
  return (
    <svg className="glass-defs" aria-hidden width="0" height="0" focusable="false">
      <filter id={id} x="-35%" y="-35%" width="170%" height="170%" colorInterpolationFilters="sRGB">
        <feTurbulence
          type="fractalNoise"
          baseFrequency={frequency}
          numOctaves={2}
          seed={7}
          stitchTiles="stitch"
          result="turb"
        />
        <feGaussianBlur in="turb" stdDeviation={blur} result="soft" />
        <feDisplacementMap
          in="SourceGraphic"
          in2="soft"
          scale={scale}
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
    </svg>
  );
}

/** Maps the 0-100 refraction param to a usable feDisplacementMap scale. */
export const refractionScale = (refraction: number) => Math.round(refraction * 0.7);
