---
name: Khadiza Interface System
colors:
  surface: '#f7faf7'
  surface-dim: '#d8dbd8'
  surface-bright: '#f7faf7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f4f1'
  surface-container: '#ecefec'
  surface-container-high: '#e6e9e6'
  surface-container-highest: '#e0e3e0'
  on-surface: '#181c1b'
  on-surface-variant: '#434840'
  inverse-surface: '#2d3130'
  inverse-on-surface: '#eef1ee'
  outline: '#73796f'
  outline-variant: '#c3c8bd'
  surface-tint: '#476643'
  primary: '#213e1f'
  on-primary: '#ffffff'
  primary-container: '#375534'
  on-primary-container: '#a6c99f'
  inverse-primary: '#add0a6'
  secondary: '#0060ac'
  on-secondary: '#ffffff'
  secondary-container: '#68abff'
  on-secondary-container: '#003e73'
  tertiary: '#293b2d'
  on-tertiary: '#ffffff'
  tertiary-container: '#3f5243'
  on-tertiary-container: '#afc4b1'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c9ecc0'
  primary-fixed-dim: '#add0a6'
  on-primary-fixed: '#042106'
  on-primary-fixed-variant: '#304e2d'
  secondary-fixed: '#d4e3ff'
  secondary-fixed-dim: '#a4c9ff'
  on-secondary-fixed: '#001c39'
  on-secondary-fixed-variant: '#004883'
  tertiary-fixed: '#d3e8d4'
  tertiary-fixed-dim: '#b7ccb9'
  on-tertiary-fixed: '#0e1f13'
  on-tertiary-fixed-variant: '#394b3c'
  background: '#f7faf7'
  on-background: '#181c1b'
  surface-variant: '#e0e3e0'
typography:
  headline-xl:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  container-max: 1200px
---

## Brand & Style

The brand personality of the design system is professional yet deeply charming, bridging the gap between high-tech automation and human-centric warmth. As an AI sales representative, the UI must feel competent and trustworthy while remaining approachable and fresh.

The design style utilizes **Glassmorphism** and **Tactile/3D depth** to create a sophisticated, multi-layered experience. By combining frosted translucent surfaces with soft ambient shadows, the interface achieves a "high-tech" feel that remains light and airy. The interaction model is inspired by tactile physics—buttons should feel pressable, and layers should feel like they exist in a physical space, mirroring the 3D-rendered quality of the brand's avatar.

## Colors

The palette is rooted in an organic green spectrum, symbolizing growth and stability, balanced by a fresh sky blue that adds a tech-forward "chime."

- **Primary Green (#375534):** Used for core branding, primary calls to action, and structural headings.
- **Secondary Blue (#4A90E2):** Derived from the atmospheric background of the avatar; used for interactive highlights, active states, and focus indicators.
- **Tertiary/Surface Green (#AEC3B0):** Used for decorative elements and subtle glass containers.
- **Neutral Background (#F4F7F4):** A tinted off-white that keeps the interface warm and prevents the clinical "lab-white" feel.
- **Supportive Greens:** `#0F2A1D` provides deep contrast for text, while `#E3EED4` serves as a soft background for large content areas or success states.

## Typography

This design system uses a dual-font strategy to balance professional structure with modern approachability. 

**Manrope** is used for headlines and labels to provide a refined, geometric, and balanced look. It conveys the "AI" intelligence through its precise construction. **Plus Jakarta Sans** is used for body copy; its soft, rounded terminals make long-form sales copy and chat interactions feel welcoming and optimistic. 

To maintain the high-tech aesthetic, use tighter letter spacing for large headlines and slightly wider spacing for labels to ensure legibility on translucent glass backgrounds.

## Layout & Spacing

The layout philosophy follows a **Fluid Grid** model with generous white space to emphasize the "clean" brand pillar. 

- **Desktop:** 12-column grid with 24px gutters. Content is centered in a max-width container of 1200px to maintain readability.
- **Tablet:** 8-column grid with 20px gutters and 32px side margins.
- **Mobile:** 4-column grid with 16px gutters and 16px side margins.

Spacing follows an 8px base unit. Use larger vertical spacing (64px+) between sections to allow the glassmorphic layers to "breathe" and avoid visual clutter.

## Elevation & Depth

Hierarchy is established through a combination of **Glassmorphism** and **Ambient Shadows**.

1.  **Base Layer:** The neutral tinted background (#F4F7F4).
2.  **Mid Layer (Glass):** Semi-transparent white surfaces (Opacity: 70-80%) with a 12px backdrop blur. Used for cards and navigation bars.
3.  **Floating Layer (3D):** Elements like primary buttons or "AI Insight" cards feature extra-diffused, low-opacity shadows tinted with the Primary Green (#375534). 
    - *Shadow Spec:* 0px 10px 30px rgba(55, 85, 52, 0.12).

Internal depth is created using 1px "inner glows" (white at 50% opacity) on the top edge of buttons and cards to simulate a light source reflecting off a physical edge.

## Shapes

The shape language is consistently **Rounded**, mirroring the soft facial features of the brand's avatar. 

- Standard components (Inputs, Cards) use a **0.5rem (8px)** corner radius.
- Large containers and "Hero" sections use **rounded-lg (16px)**.
- Highly interactive or "friendly" elements, such as chat bubbles and floating action buttons, use **rounded-xl (24px)** or full pills. 

Avoid sharp 0px corners entirely to maintain the "charming" and "approachable" personality.

## Components

### Buttons
Primary buttons should be solid Primary Green (#375534) with white text. Apply a subtle 3D lift on hover. Secondary buttons should use the glassmorphic style: a semi-transparent background with a 1px border in Tertiary Green (#AEC3B0).

### Input Fields
Inputs are white with 80% opacity and a soft 1px border. On focus, the border transitions to Secondary Blue (#4A90E2) with a subtle outer glow to indicate the AI is "listening" or ready for input.

### Cards
Cards are the primary vehicle for information. Use the Glassmorphism specification (backdrop blur + translucent white). For "Premium" or "AI-Suggested" cards, use a thin gradient border transitioning from Primary Green to Secondary Blue.

### Chat Interface
Messages from the AI (Khadiza) should use a soft Secondary Blue tint background with a pill-shaped tail. User messages should remain neutral light grey or Primary Green to distinguish roles clearly.

### Chips & Tags
Use highly rounded (pill-shaped) tags. Use `#E3EED4` for positive status tags and `#F4F7F4` for neutral category filters.