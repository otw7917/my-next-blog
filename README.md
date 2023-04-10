# my-next-blog

## 목표

- Next.js 정수.

## 기술스택

- next@13.3
- typescript
- tailwindcss

- [heroicons](https://heroicons.com/)

### Tip

---

# tailwindcss

[base styles](https://tailwindcss.com/docs/adding-custom-styles#adding-base-styles)

## 1. 기본 html element는 **@layer _base_**

```css
@layer base {
  h1 {
    @apply text-2xl font-bold;
  }
}
```

## 2. layer에 추가한 커스텀 스타일은 실제 사용한 경우에만 컴파일!

- 무조건 컴파일 파일에 추가하려면 **@layer** 를 지우면 됌
