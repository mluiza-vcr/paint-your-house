---
id: uk0l9
name: Como implementar o Dark Mode
file_version: 1.0.2
app_version: 0.10.4
file_blobs:
  src/context/themeContext.tsx: 1bca90e732017678797a1ba8d073c24c74cf065d
  src/hooks/useTheme.tsx: 9cc74bc37cf3e9339f1c7b10325b15b35612cadf
  src/main.tsx: ff9b5e4df4ca0b2e22993e6cee390f4ec733301e
  src/App.tsx: f11379f6f13c94386265e6b42a001ebf13674619
  src/components/Layout/LayoutApp.tsx: 5a1756d72dc9275b6e91759d47704e790ce16e2c
---

## Criando o Provider

<br/>

Para configurar o Dark Mode, fizemos um `ThemeProvider`[<sup id="Z2vKIlM">↓</sup>](#f-Z2vKIlM) com estado para alterar o tema atual. Na função de Provider, chamamos o useMemo() para configurar os valores do estado. O retorno da função `ThemeProvider`[<sup id="Z2vKIlM">↓</sup>](#f-Z2vKIlM) é o Contexto.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/context/themeContext.tsx
```tsx
🟩 20     export function ThemeProvider({ children }: IThemeProvider) {
🟩 21       const [currentTheme, setCurrentTheme] = useState("light");
🟩 22     
🟩 23       const providerValue = useMemo(
🟩 24         () => ({ currentTheme, setCurrentTheme }),
🟩 25         [currentTheme, setCurrentTheme]
🟩 26       );
🟩 27     
🟩 28       return (
🟩 29         <ThemeContext.Provider value={providerValue}>
🟩 30           {children}
🟩 31         </ThemeContext.Provider>
🟩 32       );
🟩 33     }
⬜ 34     
```

<br/>

## Definindo o Hook

<br/>

Em seguida, fizemos o Hook `useTheme()`[<sup id="1gfiIy">↓</sup>](#f-1gfiIy) para poder acessar facilmente o `ThemeContext`[<sup id="ZruEJR">↓</sup>](#f-ZruEJR) em qualquer componente.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/hooks/useTheme.tsx
```tsx
🟩 1      import { useContext } from "react";
🟩 2      import { ThemeContext, IProviderContext } from "../context/themeContext";
🟩 3      
🟩 4      function useTheme(): IProviderContext {
🟩 5        return useContext(ThemeContext);
🟩 6      }
🟩 7      
🟩 8      export default useTheme;
🟩 9      
```

<br/>

## Envolvendo a aplicação com o `ThemeProvider`[<sup id="Z1OHAEl">↓</sup>](#f-Z1OHAEl)

<br/>

Na função principal de renderização do App (main.tsx), envolvemos todo o componente <App /> no `ThemeProvider`[<sup id="Z1OHAEl">↓</sup>](#f-Z1OHAEl).
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/main.tsx
```tsx
⬜ 7      
🟩 8      ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
🟩 9        <React.StrictMode>
🟩 10         <BrowserRouter>
🟩 11           <ThemeProvider>
🟩 12             <App />
🟩 13           </ThemeProvider>
🟩 14         </BrowserRouter>
🟩 15       </React.StrictMode>
🟩 16     );
⬜ 17     
```

<br/>

## Definindo e acessando os temas

<br/>

Na função App, chamamos o Hook `useTheme()`[<sup id="1gfiIy">↓</sup>](#f-1gfiIy) para acessar o tema atual. Os temas são configurados pelo [Ant Design](https://ant.design/theme-editor) a partir de uma paleta de cores escolhida. No retorno da função, envolvemos as rotas no ConfigProvider próprio do Ant Design, que chama o "token" como propriedade.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/App.tsx
```tsx
⬜ 6      function App() {
⬜ 7        const { currentTheme } = useTheme();
⬜ 8      
⬜ 9        const themes: { [key: string]: Partial<AliasToken> } = {
⬜ 10         light: {
⬜ 11           colorPrimary: "#ff66c4",
⬜ 12           colorBgBase: "#fff4e6",
⬜ 13           fontSize: 16,
⬜ 14           borderRadius: 4,
⬜ 15           colorTextBase: "#3a3a3a",
⬜ 16         },
⬜ 17         dark: {
⬜ 18           colorPrimary: "#7ed957",
⬜ 19           colorBgBase: "#3A3A3A",
⬜ 20           fontSize: 16,
⬜ 21           borderRadius: 4,
⬜ 22           colorBgContainer: "#252525",
⬜ 23         },
⬜ 24       };
⬜ 25     
🟩 26       return (
🟩 27         <ConfigProvider
🟩 28           theme={{
🟩 29             token: themes[currentTheme],
🟩 30             algorithm:
🟩 31               currentTheme === "light"
🟩 32                 ? theme.defaultAlgorithm
🟩 33                 : theme.darkAlgorithm,
🟩 34           }}
🟩 35         >
🟩 36           <Router />
🟩 37         </ConfigProvider>
🟩 38       );
🟩 39     }
🟩 40     
⬜ 41     export default App;
⬜ 42     
```

<br/>

## Trocando o tema

<br/>

Na função que define o Layout da aplicação, chamamos o hook `useTheme()`[<sup id="1gfiIy">↓</sup>](#f-1gfiIy) para acessar e setar o tema atual. Criamos um botão no Header da aplicação, responsável por setar o tema quando clicado.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/components/Layout/LayoutApp.tsx
```tsx
⬜ 13     function LayoutApp({ children }: any): JSX.Element {
⬜ 14       const { setCurrentTheme, currentTheme } = useTheme();
⬜ 15       const { Header, Footer, Content } = Layout;
⬜ 16       const {
⬜ 17         token: { colorBgBase, colorPrimary },
⬜ 18       } = theme.useToken();
⬜ 19     
🟩 20       return (
🟩 21         <Layout style={LayoutStyle()}>
🟩 22           <Header style={HeaderStyle(colorBgBase)}>
🟩 23             <img
🟩 24               src={currentTheme === "light" ? logoLightMode : logoDarkMode}
🟩 25               height="100%"
🟩 26               width="200px"
🟩 27             />
🟩 28             <nav>
🟩 29               <ul
🟩 30                 style={{
🟩 31                   display: "flex",
🟩 32                   flexDirection: "column",
🟩 33                   gap: "10px",
🟩 34                   marginTop: "20px",
🟩 35                   width: "180px",
🟩 36                 }}
🟩 37               >
🟩 38                 <Button type="primary">Home</Button>
🟩 39                 <Button type="primary">Calcular</Button>
🟩 40                 <Button
🟩 41                   type="primary"
🟩 42                   onClick={() => {
🟩 43                     currentTheme === "light"
🟩 44                       ? setCurrentTheme("dark")
🟩 45                       : setCurrentTheme("light");
🟩 46                   }}
🟩 47                 >
🟩 48                   {currentTheme === "light" ? "Dark mode ☽" : "Light mode ✺"}
🟩 49                 </Button>
🟩 50               </ul>
🟩 51             </nav>
🟩 52           </Header>
```

<br/>

<!-- THIS IS AN AUTOGENERATED SECTION. DO NOT EDIT THIS SECTION DIRECTLY -->
### Swimm Note

<span id="f-ZruEJR">ThemeContext</span>[^](#ZruEJR) - "src/context/themeContext.tsx" L29
```tsx
    <ThemeContext.Provider value={providerValue}>
```

<span id="f-Z2vKIlM">ThemeProvider</span>[^](#Z2vKIlM) - "src/context/themeContext.tsx" L20
```tsx
export function ThemeProvider({ children }: IThemeProvider) {
```

<span id="f-Z1OHAEl">ThemeProvider</span>[^](#Z1OHAEl) - "src/main.tsx" L11
```tsx
      <ThemeProvider>
```

<span id="f-1gfiIy">useTheme()</span>[^](#1gfiIy) - "src/hooks/useTheme.tsx" L4
```tsx
function useTheme(): IProviderContext {
```

<br/>

This file was generated by Swimm. [Click here to view it in the app](https://app.swimm.io/repos/Z2l0aHViJTNBJTNBcGFpbnQteW91ci1ob3VzZSUzQSUzQW1sdWl6YS12Y3I=/docs/uk0l9).