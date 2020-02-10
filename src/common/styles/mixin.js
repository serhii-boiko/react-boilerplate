import { css } from 'styled-components';

const defaultBreakpoints = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
};

// ------- Media Query -------

function getSizeFromBreakpoint(breakpointValue, breakpoints = defaultBreakpoints) {
  if (breakpoints[breakpointValue]) {
    return `${breakpoints[breakpointValue]}px`;
  } else if (parseInt(breakpointValue, 10)) {
    return breakpointValue;
  } else {
    // tslint:disable-next-line no-console
    console.error('No valid breakpoint or size specified for media.');
    return '0';
  }
}

export const mediaQueryLessThan = (breakpoint) => (...args) => css`
  @media (max-width: ${getSizeFromBreakpoint(breakpoint)}) {
    ${css(...args)}
  }
`;

export const mediaQueryGreaterThan = (breakpoint) => (...args) => css`
  @media (min-width: ${getSizeFromBreakpoint(breakpoint)}) {
    ${css(...args)}
  }
`;

export const mediaQueryBetween = (firstBreakpoint, secondBreakpoint) => (...args) => css`
  @media (min-width: ${getSizeFromBreakpoint(
      firstBreakpoint
    )}) and (max-width: ${getSizeFromBreakpoint(secondBreakpoint)}) {
    ${css(...args)}
  }
`;

// ------- Media Query based on Redux and State -------

function getStateSizeFromBreakpoint(breakpointValue, breakpoints = defaultBreakpoints) {
  if (breakpoints[breakpointValue]) {
    return breakpoints[breakpointValue];
  }

  // tslint:disable-next-line no-console
  console.error('No valid breakpoint or size specified for media.');
  return null;
}

export const stateMediaQueryLessThan = (breakpoint, width) => (...args) => {
  const bp = getStateSizeFromBreakpoint(breakpoint);
  if (bp && bp >= width) {
    return css(...args);
  }

  return '';
};

export const stateMediaQueryGreaterThan = (breakpoint, width) => (...args) => {
  const bp = getStateSizeFromBreakpoint(breakpoint);
  if (bp && bp <= width) {
    return css(...args);
  }

  return '';
};

export const stateMediaQueryBetween = (firstBreakpoint, secondBreakpoint, width) => (...args) => {
  const bpFirst = getStateSizeFromBreakpoint(firstBreakpoint);
  const bpSecond = getStateSizeFromBreakpoint(secondBreakpoint);
  if (bpFirst && bpSecond && bpFirst >= width && bpSecond <= width) {
    return css(...args);
  }

  return '';
};
