import { h } from '@bolt/core/renderers';

export const MarketingGray = ({ bgColor, fgColor, size, ...otherProps }) => {
  return (
    <svg data-name="Layer 1" {...otherProps} viewBox="0 0 32 32">
      <path
        fill={bgColor}
        fill-rule="evenodd"
        d="M30.3 8.8H28a13.68 13.68 0 0 1 2 7.2A14 14 0 1 1 16 2a14.48 14.48 0 0 1 7.4 2.1V1.8A15.29 15.29 0 0 0 16 0a16 16 0 1 0 16 16 15.6 15.6 0 0 0-1.7-7.2"
        data-name="Fill-1"
      />
      <path
        fill={bgColor}
        fill-rule="evenodd"
        d="M16 8a8.15 8.15 0 0 1 3.1.6l1.5-1.5A10.39 10.39 0 0 0 16 6a10 10 0 1 0 10 10 9.39 9.39 0 0 0-1.2-4.7l-1.5 1.5A8.76 8.76 0 0 1 24 16a8 8 0 1 1-8-8"
        data-name="Fill-4"
      />
      <path
        fill={bgColor}
        fill-rule="evenodd"
        d="M16 16.5a.5.5 0 1 1 .5-.5.47.47 0 0 1-.5.5zm.9-2.8a2.92 2.92 0 0 0-.9-.2 2.5 2.5 0 1 0 2.5 2.5 2.39 2.39 0 0 0-.2-.9L25.4 8H30V6h-2.6l1.8-1.8-1.4-1.4L26 4.5V2h-2v4.6z"
        data-name="Fill-6"
      />
    </svg>
  );
};
