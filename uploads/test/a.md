$\phi$ 俯仰，$\theta$ 偏航，$\alpha\ xy$平面上投影与 $x$ 轴夹角，$\beta\ xz$平面上投影与 $x$ 轴夹角

$x_p=1$

$y_p=-\sin\alpha$

$z_p=-\sin\beta$

$\phi=\arctan(\frac1{\sqrt{y_p^2+z_p^2}}) (\phi\in[0\degree,90\degree])$
使用 $np.atan(1/np.sqrt(y_p**2+z_p**2))$ 实现

$\theta=-\arctan(\frac{z_p}{y_p})$
使用 $np.atan2(-z_p,y_p)$ 实现
