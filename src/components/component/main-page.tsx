
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { SheetTrigger, SheetContent, Sheet, SheetClose } from "@/components/ui/sheet"
import ContactPage from "../contact/contact"

export function MainPage() {
  return (
    <div className="flex flex-col min-h-dvh">
      <header className="bg-primary/80 text-primary-foreground py-4 px-6 sticky top-0 z-50  backdrop-blur">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
           <img src="/logo.png" width={50} height={50} alt="Serruys Plus" />
            <span className="text-xl font-bold">SERRUYS PLUS</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="hover:underline" prefetch={false}>
              Accueil
            </Link>
            <Link href="#services" className="hover:underline" prefetch={false}>
              Services
            </Link>
            <Link href="#tarifs" className="hover:underline" prefetch={false}>
              Tarifs
            </Link>
            <Link href="#contact" className="hover:underline" prefetch={false}>
              Contact
            </Link>
          </nav>
          <Sheet>
          <SheetTrigger asChild>
          <Button variant="default" className="md:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
          </SheetTrigger>
          <SheetContent className="w-full max-w-xs  p-6 backgroundCustom" side="right">
              <div className="flex flex-col gap-6">
              <SheetClose asChild>
                <Link className="font-medium hover:text-gray-900 dark:hover:text-gray-50" href="#services">
                  Services
                </Link>
                </SheetClose>
                <SheetClose asChild>
              <Link className="font-medium hover:text-gray-900 dark:hover:text-gray-50" href="#tarifs">
                  Tarifs
                </Link>
                </SheetClose> 
                <SheetClose asChild>
                <Link className="font-medium hover:text-gray-900 dark:hover:text-gray-50" href="#testimonials">
                  Témoignages
                </Link>
                </SheetClose>
                <SheetClose asChild>
                <Link className="font-medium hover:text-gray-900 dark:hover:text-gray-50" href="#contact">
                  Contact
                </Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-gradient-to-r from-secondary to-primary py-20 text-primary-foregroundpy-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl font-bold mb-4">Domiciliation d'entreprise avec SERRUYS PLUS</h1>
              <p className="text-muted-foreground mb-6">
                Faites confiance à notre expertise pour la domiciliation de votre entreprise. Nous vous accompagnons
                dans toutes les démarches administratives.
              </p>
              <Link href="#contact" prefetch={false}>
              <Button className="mb-4">Demander un devis</Button>
              </Link>
            </div>
            <img src="/intro.jpeg" width={500} height={400} alt="Serruys Plus" className="rounded-lg" />
          </div>
        </section>
        <section id="services" className="py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-8">Nos services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Domiciliation postale</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Bénéficiez d&apos;une adresse professionnelle pour votre entreprise. Nous recevons et réexpédions votre
                    courrier.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Domiciliation virtuelle</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Profitez d&apos;une adresse de domiciliation sans avoir de local physique. Idéal pour les entreprises en
                    ligne.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Domiciliation avec local</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Louez un espace de travail dans nos locaux pour votre entreprise. Bénéficiez d&apos;une adresse de
                    domiciliation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="tarifs" className="bg-muted py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-8">Nos formules</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Formule Essentielle</CardTitle>
                  <CardDescription>
                    <span className="text-2xl font-bold">39€</span> / mois
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                      Adresse de domiciliation postale
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                      Réexpédition du courrier
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                      Accès à notre espace de coworking
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Formule Premium</CardTitle>
                  <CardDescription>
                    <span className="text-2xl font-bold">59€</span> / mois
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                      Adresse de domiciliation postale
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                      Réexpédition du courrier
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                      Accès à notre espace de coworking
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                      Réception et transfert d&apos;appels
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                      Secrétariat téléphonique
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Formule Entreprise</CardTitle>
                  <CardDescription>
                    <span className="text-2xl font-bold">99€</span> / mois
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                      Adresse de domiciliation postale
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                      Réexpédition du courrier
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                      Accès à notre espace de coworking
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                      Réception et transfert d&apos;appels
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                      Secrétariat téléphonique
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                      Salle de réunion à disposition
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="testimonials" className="py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-8">Témoignages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent>
                  <blockquote className="text-lg font-semibold leading-snug pt-4">
                    &ldquo;Serruys Plus m&apos;a permis de me concentrer sur le développement de mon entreprise sans me
                    soucier des formalités administratives.&rdquo;
                  </blockquote>
                  <div className="mt-4 flex items-center">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="ml-4">
                      <p className="font-medium">Julien Durand</p>
                      <p className="text-muted-foreground text-sm">Fondateur, Acme Inc</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <blockquote className="text-lg font-semibold leading-snug pt-4">
                    &ldquo;Grâce à la domiciliation de mon entreprise chez Serruys Plus, j&apos;ai pu me concentrer sur mon
                    cœur de métier.&rdquo;
                  </blockquote>
                  <div className="mt-4 flex items-center">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>ML</AvatarFallback>
                    </Avatar>
                    <div className="ml-4">
                      <p className="font-medium">Marie Lefèvre</p>
                      <p className="text-muted-foreground text-sm">Gérante, Boutique en ligne</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <blockquote className="text-lg font-semibold leading-snug pt-4">
                    &ldquo;Serruys Plus m&apos;a offert une adresse professionnelle de qualité pour mon entreprise. Je
                    recommande vivement!&rdquo;
                  </blockquote>
                  <div className="mt-4 flex items-center">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>PB</AvatarFallback>
                    </Avatar>
                    <div className="ml-4">
                      <p className="font-medium">Pierre Bertrand</p>
                      <p className="text-muted-foreground text-sm">Consultant, Société de conseil</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="contact" className="bg-muted py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-8">Contactez-nous</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-muted-foreground mb-4">
                  Vous avez des questions ou vous souhaitez prendre rendez-vous ? N&apos;hésitez pas à nous contacter.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <PhoneIcon className="h-5 w-5 text-primary" />
                    <a href="#" className="text-muted-foreground">
                      +33 1 23 45 67 89
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <MailIcon className="h-5 w-5 text-primary" />
                    <a href="#" className="text-muted-foreground">
                      contact@serruys-plus.fr
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPinIcon className="h-5 w-5 text-primary" />
                    <p className="text-muted-foreground">209 RUE SAINT PIERRE 13005 MARSEILLE</p>
                  </div>
                </div>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-center">Demande de renseignements</CardTitle>
                </CardHeader>
                <CardContent>
                 <ContactPage />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground py-6">
      <div className=" mx-auto px-4 md:px-6 flex flex-col md:flex-column items-center justify-between">
          <p className="  mt-4 ">© 2024 SERRUYS PLUS.</p>
          <p className="  "> Tous droits réservés.</p>
          </div>
         
          
      </footer>
    </div>
  )
}




function CheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function MailIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function MapPinIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}


function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function PhoneIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}
